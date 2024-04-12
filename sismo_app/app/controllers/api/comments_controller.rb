module Api
  class CommentsController < ApplicationController
    
    def index
      feature = Feature.find(params[:feature_id])
      comments = feature.comments.order(created_at: :desc)
      render json: comments
    end

    def create
      feature = Feature.find(params[:feature_id])
      comment = feature.comments.build(comment_params)
      if comment.save
        render json: comment, status: :created
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:body)
    end
  end
end