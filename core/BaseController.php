<?php

class BaseController
{
    public function __construct()
    {
        header('Content-Type: application/json; charset=UTF-8');
    }

    /**
     * Sends a standardized JSON response
     */
    protected function jsonResponse($data, $statusCode = 200)
    {
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }

    /**
     * Sends standardized error response
     */
    protected function jsonError($message, $statusCode = 400)
    {
        $this->jsonResponse([
            "success" => false,
            "error"   => $message
        ], $statusCode);
    }
}
