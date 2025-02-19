<?php

namespace App\Components;

class FormRequest extends \Illuminate\Foundation\Http\FormRequest {

    protected $scenario;

    public function rules (): array {
        $return = [];
        $list = $this->ruleList();
        $rules = $this->baseRules();
        $groups = ['default', $this->scenario];

        foreach ($groups as $group) {
            if (!empty($list[$group])) {
                foreach ($list[$group] as $attr) {
                    if (!empty($rules[$attr])) {
                        $return[$attr] = $rules[$attr];
                    }
                }
            }
        }

        return $return;
    }

    public function setScenario ($scenario): FormRequest {
        $this->scenario = $scenario;

        return $this;
    }
}
