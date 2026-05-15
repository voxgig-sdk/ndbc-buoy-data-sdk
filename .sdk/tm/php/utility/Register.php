<?php
declare(strict_types=1);

// NdbcBuoyData SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NdbcBuoyDataUtility::setRegistrar(function (NdbcBuoyDataUtility $u): void {
    $u->clean = [NdbcBuoyDataClean::class, 'call'];
    $u->done = [NdbcBuoyDataDone::class, 'call'];
    $u->make_error = [NdbcBuoyDataMakeError::class, 'call'];
    $u->feature_add = [NdbcBuoyDataFeatureAdd::class, 'call'];
    $u->feature_hook = [NdbcBuoyDataFeatureHook::class, 'call'];
    $u->feature_init = [NdbcBuoyDataFeatureInit::class, 'call'];
    $u->fetcher = [NdbcBuoyDataFetcher::class, 'call'];
    $u->make_fetch_def = [NdbcBuoyDataMakeFetchDef::class, 'call'];
    $u->make_context = [NdbcBuoyDataMakeContext::class, 'call'];
    $u->make_options = [NdbcBuoyDataMakeOptions::class, 'call'];
    $u->make_request = [NdbcBuoyDataMakeRequest::class, 'call'];
    $u->make_response = [NdbcBuoyDataMakeResponse::class, 'call'];
    $u->make_result = [NdbcBuoyDataMakeResult::class, 'call'];
    $u->make_point = [NdbcBuoyDataMakePoint::class, 'call'];
    $u->make_spec = [NdbcBuoyDataMakeSpec::class, 'call'];
    $u->make_url = [NdbcBuoyDataMakeUrl::class, 'call'];
    $u->param = [NdbcBuoyDataParam::class, 'call'];
    $u->prepare_auth = [NdbcBuoyDataPrepareAuth::class, 'call'];
    $u->prepare_body = [NdbcBuoyDataPrepareBody::class, 'call'];
    $u->prepare_headers = [NdbcBuoyDataPrepareHeaders::class, 'call'];
    $u->prepare_method = [NdbcBuoyDataPrepareMethod::class, 'call'];
    $u->prepare_params = [NdbcBuoyDataPrepareParams::class, 'call'];
    $u->prepare_path = [NdbcBuoyDataPreparePath::class, 'call'];
    $u->prepare_query = [NdbcBuoyDataPrepareQuery::class, 'call'];
    $u->result_basic = [NdbcBuoyDataResultBasic::class, 'call'];
    $u->result_body = [NdbcBuoyDataResultBody::class, 'call'];
    $u->result_headers = [NdbcBuoyDataResultHeaders::class, 'call'];
    $u->transform_request = [NdbcBuoyDataTransformRequest::class, 'call'];
    $u->transform_response = [NdbcBuoyDataTransformResponse::class, 'call'];
});
