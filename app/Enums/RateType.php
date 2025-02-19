<?php

namespace App\Enums;

enum RateType: int {
    case Fixed = 1;
    case Hour = 2;
    case Month = 3;
    public static function toArray(): array {
        return array_column(self::cases(), 'name', 'value');
    }
}
