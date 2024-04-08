class Feature < ApplicationRecord
	scope :filter_by_mag_type, -> (mag_type) { where(mag_type: mag_type) }

	# Relaciones
	has_many :comments, dependent: :destroy

	# Validaciones
	validates :external_id, :magnitude, :place, :time, :mag_type, :title, :longitude, :latitude, presence: true
	validates :magnitude, numericality: { greater_than_or_equal_to: -1.0, less_than_or_equal_to: 10.0 }
	validates :latitude, numericality: { greater_than_or_equal_to: -90, less_than_or_equal_to: 90 }
	validates :longitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
end