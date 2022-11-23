# js_sandbox

Cette branche est un bac à sable minimaliste. Elle contient uniquement un
squelette vide et un test minimaliste en JS pour charger une lib en tant que
module.

## Installation

Via git:

```sh
git clone -b js_sandbox git@github.com:Rastklag/Bomberman bomberman
```

## Mise en route

Pour faire fonctionner cette version qui utilise les modules js (`import`), il
faut qu'elle soit hébergée (comme pour le POC de JP) sans quoi les
navigateurs bloquent l'import des libs JS pour violation du CORS.

On démarre juste un serveur web puis on se rend, avec le navigateur, sur
l'URL qui pointe vers la racine du projet.

### Hébergement

#### Pour le développement

##### PHPStorm

PHPStorm peut faire tout le boulot: ouvrez index.html dans PHPStorm. Il
vous propose d'ouvrir le fichier dans un navigateur et pour ça, il crée
lui-même un petit serveur minimaliste.

##### Python (pour tests et débug)

```bash
# Démarrage d'un serveur web minimaliste en python3
cd bomberman/htdocs
echo "Après le démarrage du serveur, ouvrez l'url" \
      "http://localhost:8080/index.html"

echo "Pour fermer le serveur: Ctrl+C"

python3 -m http.server 8080  # sur certaines distros, c'est juste 'python'
```

#### Pour la prod

On part du principe que vous êtes propriétaire de `MYDOMAIN.ORG`, que vous
avez installé Bomberman dans `/var/www/bomberman` et que vous avez émis un
certificat letsencrypt pour `bomberman.MYDOMAIN.ORG`.

J'ai fait exprès mettre le domaine en capitales pour faciliter le remplacement
auto.

On met htdocs comme racine pour que les clients ne puissent pas remonter
plus haut.

Une fois installé en prod, on accédera à l'application dans un navigateur avec 
l'URL: https://bomberman.MYDOMAIN.org/index.html

##### Apache

Si une config existe déjà, on peut l'utiliser pour débug, mais en prod, il
vaut mieux créer une config spécifique (et même créer un certificat SSL).

```bash
cd /etc/apache2
nano sites-available/bomberman
# puis, une fois le fichier rempli et enregistré:
ln -s /etc/apache2/sites-available/bomberman ./sites-enabled/
# puis recharger les confs
systemctl reload apache2 # ou service apache2 reload si pas de systemd
```

Contenu du fichier:

```apacheconf
<VirtualHost *:80>
    ServerName bomberman.MYDOMAIN.ORG
    DocumentRoot /var/www/bomberman/htdocs
    <Directory /var/www/bomberman/htdocs>
        Options -Indexes -FollowSymLinks;
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/bomberman-error.log
</VirtualHost>
```

On peut laisser letsencrypt créer l'équivalent HTTPS. En prod, il faut
configurer apache pour interdire le http (redirection vers https).

##### Nginx

```bash
cd /etc/nginx
nano sites-available/bomberman
# puis, une fois le fichier rempli et enregistré:
ln -s /etc/nginx/sites-available/bomberman ./sites-enabled/
# puis recharger les confs
systemctl reload nginx # ou service nginx reload si pas de systemd
```

Contenu du fichier:

```nginxconf
server {
	listen 80;
	listen [::]:80;
	server_name bomberman.MYDOMAIN.ORG;

    # redirect to https
	return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
	ssl_certificate     /etc/letsencrypt/live/bomberman.MYDOMAIN.ORG/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bomberman.MYDOMAIN.ORG/privkey.pem;

    server_name bomberman.my-domain.org;

	root /var/www/bomberman/htdocs;

	index index.html;
}
```