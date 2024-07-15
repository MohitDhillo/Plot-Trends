#!/bin/sh
while ! pg_isready -h $DJANGO_DATABASE_HOST -p "5432" > /dev/null 2> /dev/null; do
   echo "Waiting for DB host....."
   sleep 1
done
echo "Collecting static files"
python manage.py collectstatic --noinput
echo "Migrating DB"
python manage.py migrate --noinput
echo "Starting WSGI server"
uwsgi uwsgi.ini
