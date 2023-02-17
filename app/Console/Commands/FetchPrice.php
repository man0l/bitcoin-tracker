<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class FetchPrice extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:price';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetching price from bitfinex';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $pair = Http::get(env('FETCH_PRICE_BTC_USD_API_URL'));
        $price = json_decode($pair->body(), true);
        var_dump($price);
    }
}
