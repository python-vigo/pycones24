# PyConES 2024 Vigo

Página web de la conferencia nacional de Python 2024 · Vigo · Galicia


## Como empezar

1. Clona este repositorio en tu máquina local:

```bash
 git clone git@github.com:python-vigo/pycones24.git
```

2. Crea un nuevo entorno virtual (opcional)

```bash
   python -m venv .venv
   source .venv/bin/activate
```

3. Instala las dependencias

```bash
  scripts/install
```

4. Arranca el servidor de desarrollo

```bash
   scripts/server
```

Una vez que el servidor de desarrollo está en marcha, visita la url [127.0.0.1:5000](http://127.0.0.1:5000) o [127.0.0.1:5000/admin](http://127.0.0.1:5000/admin) para acceder a la interfaz del admin.

> *Para más detalles puedes consultar la [documentación oficial de lektor](https://www.getlektor.com/docs/quickstart/#running-your-project).*


## Idiomas

La web está disponible en dos idiomas: español e inglés. Para actualizar los idiomas debes editar los archivos `.po` en la carpeta `i18n`. Los
cambios se compilarán automáticamente al guardar el archivo `.po` mientras el servidor de desarrollo está en funcionamiento.

Si tienes algún problema puedes ejecutar:

```bash
scripts/normalize
```
