<?php

require_once __DIR__ . '/Database.php';
require_once __DIR__ . '/../config/config.php'; // para carregar $config

abstract class BaseRepository
{
    /**
     * @var Database
     */
    protected $db;

    /**
     * Nome da tabela (cada repositório define)
     * @var string
     */
    protected $table;

    public function __construct()
    {
        $config = require __DIR__ . '/../config/config.php';

        $this->db = new Database($config);

        if (empty($this->table)) {
            throw new Exception("Repository missing table name: " . get_class($this));
        }
    }

    public function getAll()
    {
        $sql = "SELECT * FROM {$this->table} ORDER BY id DESC";
        return $this->db->fetchAll($sql);
    }

    public function getById($id)
    {
        $sql = "SELECT * FROM {$this->table} WHERE id = ?";
        return $this->db->fetch($sql, [$id]);
    }

    public function create(array $data)
    {
        $fields = array_keys($data);
        $placeholders = array_fill(0, count($fields), '?');

        $sql = "INSERT INTO {$this->table} (" . implode(',', $fields) . ")
                VALUES (" . implode(',', $placeholders) . ")";

        return $this->db->insert($sql, array_values($data));
    }

    public function update($id, array $data)
    {
        $fields = array_keys($data);

        $set = implode(', ', array_map(function ($f) {
            return "$f = ?";
        }, $fields));

        $sql = "UPDATE {$this->table} SET $set WHERE id = ?";

        $params = array_values($data);
        $params[] = $id;

        return $this->db->update($sql, $params);
    }

    public function delete($id)
    {
        $sql = "DELETE FROM {$this->table} WHERE id = ?";
        return $this->db->delete($sql, [$id]);
    }
}
