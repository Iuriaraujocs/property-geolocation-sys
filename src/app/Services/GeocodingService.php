<?php

namespace app\Services;

class GeocodingService
{
    private $apiKey = 'AIzaSyCNyXzBaD-LlTc7hX20Atcv2KQ57ryMddg';

    /**
     * Retorna latitude e longitude para um endereço
     */
    public function getCoordinates(string $address): array
    {
        $addressEncoded = urlencode($address);
        $url = "https://maps.googleapis.com/maps/api/geocode/json?address={$addressEncoded}&key={$this->apiKey}";

        $responseJson = file_get_contents($url);

        if ($responseJson === false) {
            return ['error' => 'Failed to contact Google Geocoding API'];
        }

        $response = json_decode($responseJson, true);

        if ($response['status'] !== 'OK' || empty($response['results'])) {
            return ['error' => $response['error_message'] ?: 'Could not get geolocation for this address'];
        }

        $geometry = $response['results'][0]['geometry'];
        $location = $geometry['location'];
        $locationType = $geometry['location_type'] ?? null;

        if (is_array($locationType) ) {
            $locationType = json_encode($locationType);
        }
        return [
            'latitude' => $location['lat'],
            'longitude' => $location['lng'],
            'location_type' => $locationType
        ];
    }
}
