<?php

namespace core;

class Database
{
    private $pdo;

    public function __construct($config)
    {

        try {
            $this->pdo = new \PDO(
                "mysql:host={$config['host']};dbname={$config['dbname']};charset=utf8",
                $config['user'],
                $config['pass']
            );

            $this->pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

        } catch (\PDOException $e) {
            die("Database error: " . $e->getMessage());
        }
    }

    public function query($sql, $params = [])
    {
        $stm = $this->pdo->prepare($sql);
        $stm->execute($params);
        return $stm;
    }

    public function fetch($sql, $params = [])
    {
        return $this->query($sql, $params)->fetch(\PDO::FETCH_ASSOC);
    }

    public function fetchAll($sql, $params = [])
    {
        return $this->query($sql, $params)->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function insert($sql, $params = [])
    {
        $this->query($sql, $params);
        return $this->pdo->lastInsertId();
    }

    public function update($sql, $params = [])
    {
        $stm = $this->query($sql, $params);
        return $stm->rowCount();
    }

    public function delete($sql, $params = [])
    {
        $stm = $this->query($sql, $params);
        return $stm->rowCount();
    }
}
