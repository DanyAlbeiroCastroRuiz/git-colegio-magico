# 🧙‍♂️ Colegio Mágico

¡Felicidades, joven aprendiz! Has sido aceptado en el **Colegio Mágico**. Aquí aprenderás los antiguos secretos de la hechicería de software (también conocida como programación) y dominarás el arte del control del tiempo (Git).

Para graduarte, deberás superar **10 retos mágicos**. Cada reto pondrá a prueba tu lógica, tu conocimiento de hechizos (código Java) y tu capacidad para registrar tus acciones en el Grimorio del Colegio (historial de Git).

## 📜 Instrucciones para Empezar

1.  **Crea tu propia copia del pergamino:** Haz clic en el botón **Fork** (Bifurcar) en la esquina superior derecha de este repositorio. Esto creará una copia exacta en tu propia cuenta de GitHub, donde podrás practicar tus hechizos sin peligro.
2.  **Clona tu repositorio:** Usa tu terminal mágica para descargar el código a tu computadora:
    ```bash
    git clone https://github.com/TU_USUARIO/ActividadGit.git
    cd ActividadGit
    ```
3.  **Consulta el Grimorio:** Antes de empezar, lee detenidamente los pergaminos en la carpeta `assets/`:
    *   [Varita Git (`assets/varita_git.md`)](assets/varita_git.md): Una guía rápida con los comandos mágicos que necesitarás (`git add`, `git commit`, `git push`).
    *   [Grimorio de Commits (`assets/grimorio_commits.md`)](assets/grimorio_commits.md): Las reglas de la Academia sobre cómo registrar tus hechizos correctamente.

> 📺 **¿Sientes que tu magia Git aún es débil?**  
> Si tienes dudas, puedes consultar el video oficial del profesor:  
> [Git y GitHub, trabaja con equipos multidisciplinarios, curso práctico desde cero](https://youtu.be/GiD0CizQrX8)

---

## 🔮 Los Retos Mágicos

Los retos están organizados en diferentes paquetes dentro de `src/main/java/com/quipux/colegio/`. 
Cada reto tiene su propia clase con un método `main` (para que puedas probarlo ejecutándolo tú mismo) y una clase de pruebas (Test) en `src/test/java/com/quipux/colegio/` para validar tu código.

Para superar un reto, debes completar el código de forma que las **Pruebas Automatizadas (Unit Tests)** pasen exitosamente.

Cada vez que resuelvas un reto, debes hacer un **commit** y luego un **push** a tu repositorio. ¡El Gran Tribunal de GitHub Actions revisará tus hechizos automáticamente!

### 🧙‍♂️ Reto 1: El Hechizo de Iniciación (`reto1.HechizoIniciacion`)
Antes de aprender a invocar fuego, el Gran Mago debe saber tu nombre.
*   **Misión:** Abre `HechizoIniciacion.java` y completa el método `invocar()` para que devuelva una cadena con tu nombre y el nombre de tu profesor.
*   **Git:** Haz un commit usando la convención correcta y súbelo.

### ➕ Reto 2: Aritmancia Básica
La magia requiere precisión matemática.
*   **Misión:** Completa el método `aritmanciaBasica()` para que sume dos números enteros de forma correcta.

### 🔄 Reto 3 al 9: ¡Usa tu magia (o tu IA)!
Para los siguientes retos, ubicados en sus respectivos paquetes (`reto3`, `reto4`, etc.), se te pedirá usar ciclos (`for`, `while`), condicionales (`if`, `else`) y programación orientada a objetos. Lee las instrucciones dentro de cada clase para descubrir tu misión.

**Reglas de Oro del Colegio:**
1. ⚠️ **¡PROHIBIDO MODIFICAR LAS PRUEBAS!** Bajo ninguna circunstancia puedes alterar los archivos que terminan en `Test.java` (ej. `HechizoIniciacionTest.java`). Si modificas las pruebas para hacer trampa, el Tribunal Mágico te expulsará.
2. 🤖 **Uso de Inteligencia Artificial:** Lo ideal es que intentes resolver la lógica por tu cuenta para entrenar tu mente. Sin embargo, si te atascas, *puedes* usar IA (como ChatGPT, Gemini o Claude) **SOLO** para que te ayude a resolver la lógica del código Java.
3. 🚫 **¡PROHIBIDO USAR IA PARA GIT!** No puedes usar IA para que te dicte los comandos de Git, ni para que escriba tus mensajes de commit. El objetivo de la actividad es que memorices y apliques Git. Debes usar tu propia memoria y el `assets/varita_git.md`.

### 📝 Reto 10: El Pensadero y la Graduación (Pull Request)
Al finalizar todos los retos de código, deberás enviar tu trabajo final al Gran Mago original mediante un **Pull Request**.
1. Copia el archivo `PLANTILLA_ENTREGA.md`.
2. Renombra la copia con tu nombre completo en mayúsculas (ejemplo: `JUAN_PEREZ_GOMEZ.md`).
3. Responde a las preguntas de graduación dentro de tu nuevo archivo.
4. Haz `add`, `commit` y `push`.
5. Ve a tu repositorio en GitHub y abre un **Pull Request** hacia el repositorio original del colegio. *(Si no sabes cómo, consulta la [Guía de Pull Request (`assets/guia_pull_request.md`)](assets/guia_pull_request.md))*.

¡Que la magia del código te acompañe!

