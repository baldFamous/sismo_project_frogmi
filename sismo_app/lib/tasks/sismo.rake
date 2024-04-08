require 'httparty'

namespace :sismo do
  desc "Fetch seismic data from USGS"
  task fetch_data: :environment do
    url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    response = HTTParty.get(url)
    if response.success?
      features = response.parsed_response['features']
      features.each do |feature|
        # Extract data
        external_id = feature['id']
        magnitude = feature.dig('properties', 'mag')
        place = feature.dig('properties', 'place')
        time = Time.at(feature.dig('properties', 'time') / 1000)
        tsunami = feature.dig('properties', 'tsunami')
				tsunami = false if tsunami.nil?
        mag_type = feature.dig('properties', 'magType')
        title = feature.dig('properties', 'title')
        longitude = feature['geometry']['coordinates'][0]
        latitude = feature['geometry']['coordinates'][1]
        url = feature.dig('properties', 'url')

        # Create or update your Feature model
        Feature.find_or_initialize_by(external_id: external_id).tap do |f|
          f.magnitude = magnitude
          f.place = place
          f.time = time
          f.tsunami = tsunami
          f.mag_type = mag_type
          f.title = title
          f.longitude = longitude
          f.latitude = latitude
          f.url = url

          if f.new_record? || f.changed?
            if f.save
              puts "Guardado correctamente: #{f.external_id}"
            else
              puts "Error al guardar: #{f.errors.full_messages.join(', ')}"
            end
          end
        end

        puts "Processing feature with ID: #{external_id}"
      end
    else
      puts "Failed to retrieve data"
    end
  end
end
