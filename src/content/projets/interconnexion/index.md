---
title: "Projet d'interconnexion"
description: "Conception et déploiement d'un Système Autonome (AS), routage dynamique OSPF, VPN WireGuard, accès box-like DHCP/NAT et services d'entreprise."
thumbnail: ./interconnexion.png
tech:
  - GNS3
  - Docker
  - Linux
  - FRRouting
  - WireGuard
  - dnsmasq
order: 2
publishDate: 2026-01-14
---

## Présentation du projet

Ce projet d'ingénierie réseau consistait à concevoir et déployer l'architecture complète d'un AS simulant le fonctionnement d'un Fournisseur d'Accès Internet et d'un réseau d'entreprise multi-sites.

L'infrastructure a été entièrement virtualisée à l'aide de **GNS3** et de conteneurs **Docker**.

---

## Contributions

Au sein d'une équipe de 6 étudiants, mes responsabilités ont porté sur la conception et l'implémentation des briques d'accès clients et de la sécurité des communications.

### Accès des clients particuliers (Box-like)
- Déploiement de routeurs virtuels de type "box internet" sous Alpine Linux.
- Configuration du service **DHCP** avec `dnsmasq` pour la distribution dynamique des adresses IP privées sur le réseau domestique.
- Mise en place du **NAT** avec `iptables` sur l'interface WAN des box pour autoriser la communication des équipements privés vers le réseau de l'AS.

### Tunnels VPN sécurisés (WireGuard)
- **VPN Employé ↔ Entreprise** : Déploiement d'un tunnel VPN chiffré basé sur **WireGuard** permettant à un employé distant d'accéder de manière sécurisée aux ressources internes de l'entreprise.
- **VPN Inter-sites** : Configuration de la passerelle VPN site-à-site pour interconnecter le site principal et le site secondaire de l'entreprise à travers un tunnel virtuel chiffré.
- Mise en place de règles de filtrage pare-feu (`iptables`) sur les serveurs VPN pour limiter le transfert de données aux seuls services réseau autorisés.

### Autres
- Participation à la configuration et aux tests de l'adressage **DHCP d'entreprise**.
- Rédaction et structuration globale du rapport technique final.

