<?php

namespace App\Enums;

enum BasicStatus: int {
    case Active = 1;
    case Inactive = 2;

    public function isActive (): bool {
        return $this === self::Active;
    }

    public function isInactive (): bool {
        return $this === self::Inactive;
    }

    public static function toArray(): array {
        return array_column(self::cases(), 'name', 'value');
    }
}
