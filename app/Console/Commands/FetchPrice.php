<?php

namespace App\Console\Commands;

use App\Models\Price;
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
        $result = json_decode($pair->body(), true);

        $price = new Price();
        $price->mid = floatval($result['mid']);
        $price->bid = floatval($result['bid']);
        $price->ask = floatval($result['ask']);
        $price->last_price = floatval($result['last_price']);
        $price->low = floatval($result['low']);
        $price->high = floatval($result['high']);
        $price->volume = floatval($result['volume']);
        $price->fetched_at = new \DateTime(strtotime($result['timestamp']));
        $price->save();
    }
}
