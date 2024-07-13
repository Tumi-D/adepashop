<?php
namespace App\utils;

use App\Models\Currency;
use App\Models\Role;
use App\Models\Setting;
use Illuminate\Support\Facades\Auth;

class helpers
{

    //  Helper Multiple Filter
    public function filter($model, $columns, $param, $request)
    {
        // Loop through the fields checking if they've been input, if they have add
        //  them to the query.
        $fields = [];
        for ($key = 0; $key < count($columns); $key++) {
            $fields[$key]['param'] = $param[$key];
            $fields[$key]['value'] = $columns[$key];
        }

        foreach ($fields as $field) {
            $model->where(function ($query) use ($request, $field, $model) {
                return $model->when(
                    $request->filled($field['value']),
                    function ($query) use ($request, $model, $field) {
                        $field['param'] = 'like' ?
                            $model->where($field['value'], 'like', "{$request[$field['value']]}")
                            : $model->where($field['value'], $request[$field['value']]);
                    }
                );
            });
        }

        // Finally return the model
        return $model;
    }

    //  Check If Hass Permission Show All records
    public function Show_Records($model)
    {
        $Role = Auth::user()->roles()->first();
        $ShowRecord = Role::findOrFail($Role->id)->inRole('record_view');

        if (!$ShowRecord) {
            return $model->where('user_id', '=', Auth::user()->id);
        }
        return $model;
    }

    // Get Currency
    public function Get_Currency()
    {
        $settings = Setting::with('Currency')->where('deleted_at', '=', null)->first();

        if ($settings && $settings->currency_id) {
            if (
                Currency::where('id', $settings->currency_id)
                    ->where('deleted_at', '=', null)
                    ->first()
            ) {
                $symbol = $settings['Currency']->symbol;
            } else {
                $symbol = '';
            }
        } else {
            $symbol = '';
        }
        return $symbol;
    }

    // Get Currency COde
    public function Get_Currency_Code()
    {
        $settings = Setting::with('Currency')->where('deleted_at', '=', null)->first();

        if ($settings && $settings->currency_id) {
            if (
                Currency::where('id', $settings->currency_id)
                    ->where('deleted_at', '=', null)
                    ->first()
            ) {
                $code = $settings['Currency']->code;
            } else {
                $code = 'usd';
            }
        } else {
            $code = 'usd';
        }
        return $code;
    }

    //Perform Request
    function performRequest($method, $requestUrl, $formParams = [], $headers = [], $format = 'json')
    {
        if ($method == "POST") {
            $cURLConnection = curl_init($requestUrl);
            if ($format == "form_params") {
                $formParams = (is_array($formParams)) ? http_build_query($formParams) : $formParams;
                curl_setopt($cURLConnection, CURLOPT_POST, 1);
            }
            if ($format == "json") {
                $formParams = json_encode($formParams);
            }
            if ($format == "form_data") {
                // $formParams = (is_array($formParams)) ? ($formParams) : $formParams;
                curl_setopt($cURLConnection, CURLOPT_POST, 1);
                curl_setopt($cURLConnection, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
            }
            curl_setopt($cURLConnection, CURLOPT_POSTFIELDS, $formParams);
            curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($cURLConnection, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($cURLConnection, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($cURLConnection, CURLOPT_SSL_VERIFYPEER, 0);
            $apiResponse = curl_exec($cURLConnection);
            $status = curl_getinfo($cURLConnection, CURLINFO_HTTP_CODE);
            curl_close($cURLConnection);
            return $apiResponse;
        }
        if ($method == "GET") {
            $cURLConnection = curl_init($requestUrl);
            // curl_setopt($cURLConnection, CURLOPT_URL, $requestUrl);
            curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($cURLConnection, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($cURLConnection, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($cURLConnection, CURLOPT_SSL_VERIFYPEER, 0);
            $apiResponse = curl_exec($cURLConnection);
            curl_close($cURLConnection);
            return $apiResponse;
        }
    }


    public function sendSMS($sendername,$telephone, $message)
    {
        $telephone =  $this->internationalizeGhanaianNumber($telephone);
        $header_parameters = [
            "Content-Type: application/x-www-form-urlencoded",
            "Accept: application/json",
        ];
        $form_parameters = [
            "to" => $telephone,
            "type" => 0,
            "sender" => $sendername ?? 'AdepaPOS',
            "text" => $message,
            "key" => env('SMS_ONLINE_KEY')
        ];
        $res = true;
        $results = $this->performRequest('POST',"https://api.smsonlinegh.com/v4/message/sms/send", $form_parameters, $header_parameters, "form_params");
        $res = json_decode($results);
        if ($res) {

            // Log::info('SMS sent successfully');
            return true;
        }
        // Log::error('SMS not sent');
        return false;
    }

    function internationalizeGhanaianNumber($telephone) {
        // Remove any non-numeric characters
        $telephone = preg_replace('/\D/', '', $telephone);
        // Check if the number starts with '0'
        if (strpos($telephone, '0') === 0) {
            // Remove the leading '0' and prepend '+233'
            $telephone = '233' . substr($telephone, 1);
        } elseif (strpos($telephone, '233') !== 0) {
            $telephone = "233$telephone";
        }
        return $telephone;
    }



}
