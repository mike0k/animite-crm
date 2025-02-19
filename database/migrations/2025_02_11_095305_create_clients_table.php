<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->integer('status', false, true);
            $table->string('name')->unique();
            $table->string('color', 7)->nullable();
            $table->string('email')->nullable();
            $table->string('phone', 15)->nullable();
            $table->text('address')->nullable();
            $table->string('inv_name')->nullable();
            $table->string('inv_email')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
