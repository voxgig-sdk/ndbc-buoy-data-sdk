# NdbcBuoyData SDK feature factory

from ndbcbuoydata_sdk.feature.base_feature import NdbcBuoyDataBaseFeature
from ndbcbuoydata_sdk.feature.test_feature import NdbcBuoyDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NdbcBuoyDataBaseFeature(),
        "test": lambda: NdbcBuoyDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
