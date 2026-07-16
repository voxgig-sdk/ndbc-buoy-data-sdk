<?php
declare(strict_types=1);

// NdbcBuoyData SDK base feature

class NdbcBuoyDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NdbcBuoyDataContext $ctx, array $options): void {}
    public function PostConstruct(NdbcBuoyDataContext $ctx): void {}
    public function PostConstructEntity(NdbcBuoyDataContext $ctx): void {}
    public function SetData(NdbcBuoyDataContext $ctx): void {}
    public function GetData(NdbcBuoyDataContext $ctx): void {}
    public function GetMatch(NdbcBuoyDataContext $ctx): void {}
    public function SetMatch(NdbcBuoyDataContext $ctx): void {}
    public function PrePoint(NdbcBuoyDataContext $ctx): void {}
    public function PreSpec(NdbcBuoyDataContext $ctx): void {}
    public function PreRequest(NdbcBuoyDataContext $ctx): void {}
    public function PreResponse(NdbcBuoyDataContext $ctx): void {}
    public function PreResult(NdbcBuoyDataContext $ctx): void {}
    public function PreDone(NdbcBuoyDataContext $ctx): void {}
    public function PreUnexpected(NdbcBuoyDataContext $ctx): void {}
}
