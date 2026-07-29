---
title: "Morpion en ligne"
description: "Application web full-stack de morpion en ligne intégrant des parties et un chat en temps réel via WebSockets, une authentification JWT et une gestion d'amis."
thumbnail: ./morpion.png
tech:
  - React
  - TailwindCSS
  - Spring Boot
  - WebSockets
  - MySQL
  - JWT
order: 1
publishDate: 2026-05-20
---

## Présentation du projet

Ce projet d'application web full-stack consistait à concevoir et développer un jeu en ligne avec les technologies vues en cours.

Nous nous sommes donc orienté vers un jeu de morpion en ligne reposant sur une architecture MVC complète.

L'application intègre un front-end React avec TailwindCSS, un back-end Spring Boot avec sécurité JWT, et des fonctionnalités temps réel via WebSockets.

---

## Contributions

Au sein d'une équipe de 3 étudiants, mes responsabilités ont principalement porté sur la communication en temps réel, la modélisation de la base de données et la documentation.

### Chat en temps réel
- Développement du système de chat intégré aux parties multijoueur en utilisant les WebSockets avec le protocole STOMP.
- Synchronisation instantanée des messages entre joueurs et sauvegarde automatique en base de données.

### Conception de la base de données
- Modélisation du schéma relationnel MySQL composé de 8 tables principales (`users`, `player_profile`, `friendship`, `game`, `move`, `message`, `game_invitation`, `leaderboard_entry`).
- Mappings d'entités JPA pour assurer la persistance et la cohérence des données.

### Documentation
- Rédaction et structuration du rapport technique du projet.
