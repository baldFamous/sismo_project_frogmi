class Comment < ApplicationRecord
  belongs_to :feature

  validates :body, presence: true
  validates :feature_id, presence: true, numericality: { only_integer: true }
  validate :feature_must_exist

  private

  def feature_must_exist
    errors.add(:feature_id, "must be a valid feature id") unless Feature.exists?(self.feature_id)
  end
end