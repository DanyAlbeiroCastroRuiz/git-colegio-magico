# 🪄 La Varita Git: Guía de Comandos Básicos

Git es tu varita mágica para controlar el tiempo y guardar tu progreso en la Academia. Si olvidas algún comando, ¡este pergamino es tu salvación!

## 1. 🔍 Ver el estado actual (El Ojo que Todo lo Ve)
Antes de hacer cualquier cosa, es útil saber qué archivos has modificado.
```bash
git status
```

## 2. ➕ Preparar los ingredientes (Stage)
Cuando modificas un archivo (por ejemplo, resuelves un reto en `AcademiaMagica.java`), debes decirle a Git que quieres incluirlo en tu próximo registro.
```bash
# Para agregar un archivo específico:
git add src/main/java/com/quipux/magia/AcademiaMagica.java

# Para agregar TODOS los archivos modificados a la vez:
git add .
```

## 3. ✍️ Sellar el Hechizo (Commit)
Una vez preparados los ingredientes, sella el registro con un mensaje claro siguiendo el [Grimorio de Commits](grimorio_commits.md).
```bash
git commit -m "feat: completar el reto 2 de aritmancia"
```

## 4. 🚀 Enviar a la nube (Push)
Tu magia aún está solo en tu computadora local. Para que el Gran Tribunal (GitHub Actions) pueda evaluarla, debes enviarla a tu repositorio en GitHub.
```bash
git push
```

## 5. ⏬ Traer nueva magia (Pull)
Si el Gran Mago actualiza el repositorio original o si hiciste cambios desde la página web de GitHub, necesitas traer esos cambios a tu computadora.
```bash
git pull
```

---

### Flujo Típico de Trabajo
Para cada reto, tu flujo será casi siempre el mismo:
1. Modificas el código en tu editor.
2. `git status` *(Opcional, para ver qué cambiaste)*
3. `git add .`
4. `git commit -m "tipo: tu mensaje"`
5. `git push`
