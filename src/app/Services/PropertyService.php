<?php

namespace app\Services;

require_once __DIR__ . '/../Repositories/PropertyRepository.php';
require_once __DIR__ . '/GeocodingService.php';

use app\Repositories\PropertyRepository;
use app\Services\GeocodingService;

class PropertyService
{
    private $repo;

    private $geocodingService;

    public function __construct()
    {
        $this->geocodingService = new GeocodingService();
        $this->repo = new PropertyRepository();
    }

    public function create($data)
    {
        $coords = $this->geocodingService->getCoordinates($data['address']);
        if (isset($coords['error'])) {
            return ['error' => $coords['error']];
        }

        $data['latitude'] = $coords['latitude'];
        $data['longitude'] = $coords['longitude'];
        $data['extra_field'] = $coords['location_type'];
        return $this->repo->create($data);
    }

    public function get($id)
    {
        return $this->repo->findById($id);
    }

    public function list()
    {
        return $this->repo->getAll();
    }
}
