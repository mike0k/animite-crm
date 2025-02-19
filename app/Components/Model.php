<?php

namespace App\Components;

use App\Enums\BasicStatus;

class Model extends \Illuminate\Database\Eloquent\Model {

    private static $_instances = [];

    public function labels (): array {
        $labels = [];
        foreach ($this->fillable as $key) {
            $labels[$key] = ucfirst($key);
        }

        return $labels;
    }

    public static function instance ($refresh = false): Model {
        $className = static::class;
        if ($refresh || !isset(self::$_instances[$className])) {
            $model = new $className;
            self::$_instances[$className] = $model->newInstance();
        }

        return self::$_instances[$className];
    }

    public function listStatus (): array {
        return $this->listEnum(BasicStatus::toArray());
    }

    protected function listEnum ($items): array {
        $list = [];
        foreach ($items as $key => $value) {
            $list[] = [
                'key' => $key,
                'value' => $value
            ];
        }

        return $list;
    }

    protected function listRows ($items, $key, $val): array {
        $list = [];
        foreach ($items as $item) {
            $list[] = [
                'key' => $item[$key],
                'value' => $item[$val]
            ];
        }

        return $list;
    }
}
