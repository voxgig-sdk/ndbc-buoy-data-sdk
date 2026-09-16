# NdbcBuoyData SDK feature factory

from ndbcbuoydata_sdk.feature.base_feature import NdbcBuoyDataBaseFeature
from ndbcbuoydata_sdk.feature.ratelimit_feature import NdbcBuoyDataRatelimitFeature
from ndbcbuoydata_sdk.feature.retry_feature import NdbcBuoyDataRetryFeature
from ndbcbuoydata_sdk.feature.test_feature import NdbcBuoyDataTestFeature
from ndbcbuoydata_sdk.feature.timeout_feature import NdbcBuoyDataTimeoutFeature


_FEATURES = {
    "base": lambda: NdbcBuoyDataBaseFeature(),
    "ratelimit": lambda: NdbcBuoyDataRatelimitFeature(),
    "retry": lambda: NdbcBuoyDataRetryFeature(),
    "test": lambda: NdbcBuoyDataTestFeature(),
    "timeout": lambda: NdbcBuoyDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
