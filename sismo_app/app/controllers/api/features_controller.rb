module Api
  class FeaturesController < ApplicationController

    def index
      if params[:per_page].to_i > 1000
        render json: { error: "per_page cannot exceed 1000" }, status: :bad_request
        return
      end
    
      features = Feature.all
      if params.dig(:filters, :mag_type)
        mag_types = params[:filters][:mag_type].split(',')
        features = features.where(mag_type: mag_types)
      end
    
      features = features.page(params[:page]).per(params[:per_page] || 25)
    
      render json: {
        data: ActiveModelSerializers::SerializableResource.new(features, each_serializer: FeatureSerializer).as_json,
        pagination: {
          current_page: features.current_page,
          total: features.total_count,
          per_page: features.limit_value
        }
      }
    end
    

    def show
      feature = Feature.find(params[:id])
      render json: feature
    end

  end

end