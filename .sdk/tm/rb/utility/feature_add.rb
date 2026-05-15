# NdbcBuoyData SDK utility: feature_add
module NdbcBuoyDataUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
