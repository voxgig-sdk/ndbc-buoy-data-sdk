# NdbcBuoyData SDK utility: make_context

from core.context import NdbcBuoyDataContext


def make_context_util(ctxmap, basectx):
    return NdbcBuoyDataContext(ctxmap, basectx)
