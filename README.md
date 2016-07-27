# Colorpass

Alternative au mot de passe traditionnel basée sur les couleurs et le changement de position des cases.

![Colorpass](/example/bg.png "Colorpass")

## Pour l'obtenir

Inclure le fichier __```colorpass.js```__ dans votre fichier HTML :
```html
<script src="http://alexis-delee.esy.es/Colorpass/dist/colorpass.js"></script>
```

Ou cloner le dépôt :
```html
git clone https://github.com/alexisdelee/Colorpass.git
```

## Utilisation

```html
<script src="http://alexis-delee.esy.es/Colorpass/dist/colorpass.js"></script>
<script type="text/javascript">
	var container = document.getElementById('container');
	Security.colorpass.new(['#EEEEEE', '#F5ED7E', '#31E1BD', '#40B4E4', '#6566AE', '#E02C51'], container);
</script>
```

## Compatibilité

- Chrome >= 8
- Firefox >= 6.0
- Internet Explorer >= 11
- Opera >= 11.10
- Safari >= 6