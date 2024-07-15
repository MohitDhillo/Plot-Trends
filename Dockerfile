FROM python:3.10
LABEL maintainer Prasanta Kakati <prasantakakati1994@gmail.com>
RUN apt-get update && \
    apt-get install --yes build-essential curl
RUN apt-get install --yes postgresql-client libpq-dev
RUN mkdir /nhne-symbol-autocomplete
WORKDIR /nhne-symbol-autocomplete
ENV POETRY_HOME="/opt/poetry"
ENV PATH="$POETRY_HOME/bin:$PATH"
RUN curl -sSL https://install.python-poetry.org | python3 -
COPY pyproject.toml poetry.lock /nhne-symbol-autocomplete/
RUN poetry config virtualenvs.create false && \
    poetry install --no-dev
COPY . /nhne-symbol-autocomplete
CMD [ "sh", "start.sh" ]
