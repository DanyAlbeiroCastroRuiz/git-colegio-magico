# ⚡️ Despertando la Magia: Activar GitHub Actions

Cuando un joven mago hace un **Fork** de un repositorio, GitHub (el gran guardián de los pergaminos) desactiva automáticamente todos los encantamientos automáticos (los flujos de trabajo de Actions) por seguridad. 

Si no los activas, el **Tribunal Mágico** no podrá revisar tus hechizos ni abrir Issues con tus resultados.

## 🛠️ Instrucciones para habilitar el Tribunal:

1. Ve a la página principal de tu repositorio (tu *Fork*) en GitHub.
2. Haz clic en la pestaña superior que dice **"Actions"** (Acciones).
3. Verás un mensaje advirtiendo que los flujos de trabajo están deshabilitados. 
4. Haz clic en el gran botón verde que dice: **"I understand my workflows, go ahead and enable them"** (Entiendo mis flujos de trabajo, habilitarlos).
5. *(Opcional, pero recomendado)*: Ve a **Settings** > **Actions** > **General**, baja hasta la sección **"Workflow permissions"** y asegúrate de que la opción **"Read and write permissions"** esté marcada. Esto le da al Tribunal el poder de crear Issues en tu repositorio para informarte de tu progreso.
6. **¡Importante! Revisa el Buzón Mágico:** Ve a **Settings** (Ajustes) en el menú superior de tu repositorio. En la página que se abre, no mires el menú lateral izquierdo; **desplázate hacia abajo en el área principal/derecha** hasta encontrar la sección **Features** (Características). Allí, asegúrate de que la casilla **"Issues"** esté marcada. Si los Issues están desactivados, el Tribunal lanzará un error (`HttpError: Issues has been disabled in this repository`) cuando intente hablarte.

## 🚀 ¿Y por qué no aparece mi primer Issue?

Los hechizos del Tribunal no viajan hacia el pasado. Si hiciste commits o creaste el fork *antes* de activar las Actions, el Tribunal no los ha detectado aún. 

Para invocar la primera evaluación y ver el primer Issue, simplemente debes realizar una nueva acción que despierte al Tribunal: completa el **Reto 1**, haz un `commit` y luego un `push`. ¡Esa nueva oleada de magia será detectada y el Tribunal publicará su veredicto en la pestaña de Issues!
