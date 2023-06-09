#!/bin/sh

python manage.py collectstatic --noinput
python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py createadmin
python manage.py runserver 0.0.0.0:8000

exec "$@"