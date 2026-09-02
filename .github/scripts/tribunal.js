const fs = require('fs');
const path = require('path');

const RETOS = [
    {
        title: "Reto 1: El Hechizo de Iniciación 🧙‍♂️",
        body: "¡Bienvenido al Colegio Mágico!\n\nTu primera misión es muy sencilla. Antes de poder hacer magia, el Tribunal necesita saber quién eres.\n\n**Misión:**\n1. Ve a `src/main/java/com/colegiomagico/reto1/HechizoIniciacion.java`.\n2. Completa el método `invocar()` para que retorne una cadena con tu nombre y el de tu profesor.\n3. Haz `git add`, `git commit` (usando `feat: ...`) y `git push`.\n\n¡Estaremos evaluando tu magia automáticamente! ✨",
        testFile: "com.colegiomagico.reto1.HechizoIniciacionTest.txt",
        hint: "El método debe retornar una cadena de texto (String) uniendo tu nombre y el del profesor. Asegúrate de incluir los espacios correctos."
    },
    {
        title: "Reto 2: Aritmancia Básica ➕",
        body: "¡Excelente! Has superado el primer reto.\n\nLa magia requiere precisión. Ahora debes demostrar tus habilidades en Aritmancia (Matemáticas Mágicas).\n\n**Misión:**\n1. Ve a `src/main/java/com/colegiomagico/reto2/Aritmancia.java`.\n2. Completa el método `sumar(int a, int b)` para que devuelva el resultado correcto.\n3. Haz commit y push.\n\n¡Tú puedes!",
        testFile: "com.colegiomagico.reto2.AritmanciaTest.txt",
        hint: "El método debe retornar la suma de 'a' y 'b'. Usa la instrucción 'return a + b;'."
    },
    {
        title: "Reto 3: La Poción de Ciclos 🔄",
        body: "¡Increíble! Ahora entramos en terreno avanzado. Es hora de usar **Ciclos For** para preparar pociones en masa.\n\n**Misión:**\n1. Ve a `reto3/PocionCiclos.java`.\n2. Usa un ciclo `for` para crear una cadena que repita la palabra 'Pocion ' tantas veces como se indique.\n\n⚠️ **RECUERDA LAS REGLAS DE ORO:**\n- **No modifiques las pruebas (`Test.java`)**.\n- Puedes usar IA (ChatGPT, Gemini) para **resolver la lógica** en Java, pero NUNCA para los comandos de Git. ¡Usa tu memoria y la Varita Git!",
        testFile: "com.colegiomagico.reto3.PocionCiclosTest.txt",
        hint: "Inicia tu ciclo con 'for(int i = 0; i < cantidad; i++)' y concatena 'Pocion ' a una variable String en cada iteración."
    },
    {
        title: "Reto 4: Defensa contra las Artes Oscuras 🛡️",
        body: "¡Pociones listas! Pero ten cuidado, las maldiciones acechan. Necesitamos condicionales (`if/else`) para defendernos.\n\n**Misión:**\nVe a `reto4/DefensaCondicional.java` y bloquea las maldiciones imperdonables ('Crucio', 'Imperius'). Retorna 'Maldicion' si te atacan con ellas, o 'Permitido' de lo contrario.",
        testFile: "com.colegiomagico.reto4.DefensaCondicionalTest.txt",
        hint: "Usa 'if (hechizo.equals(\"Crucio\") || hechizo.equals(\"Imperius\"))' para verificar el string. Recuerda que en Java se compara con .equals()."
    },
    {
        title: "Reto 5: Conteo Mágico con While ⏳",
        body: "¡Buena defensa! A veces no sabemos cuántas veces tenemos que repetir un hechizo. Para eso usamos el ciclo `while`.\n\n**Misión:**\nVe a `reto5/ConteoMagico.java` y usa un ciclo `while` para sumar todos los números desde 1 hasta el límite dado.",
        testFile: "com.colegiomagico.reto5.ConteoMagicoTest.txt",
        hint: "Crea una variable contador empezando en 1 y un total en 0. Usa 'while (contador <= limite)', suma al total y no olvides hacer 'contador++'."
    },
    {
        title: "Reto 6: El Sombrero Clasificador 🎩",
        body: "¡Has llegado a la mitad de tu formación! Es hora de usar la estructura `switch` (o múltiples `if/else if`) para clasificar a los estudiantes.\n\n**Misión:**\nVe a `reto6/SombreroClasificador.java` y asigna la virtud correspondiente a cada casa (Gryffindor -> Valentia, etc).",
        testFile: "com.colegiomagico.reto6.SombreroClasificadorTest.txt",
        hint: "Usa 'switch(casa)' y 'case \"Gryffindor\": return \"Valentia\";'. Si no usas return directo, no olvides los 'break'."
    },
    {
        title: "Reto 7: El Cofre de Varitas 🪄",
        body: "Un mago necesita organizar sus herramientas. Aprenderemos a iterar sobre **Arreglos (Arrays)**.\n\n**Misión:**\nVe a `reto7/CofreVaritas.java` y encuentra la varita más poderosa (el número mayor en el arreglo).",
        testFile: "com.colegiomagico.reto7.CofreVaritasTest.txt",
        hint: "Inicializa una variable 'max' con el primer elemento del arreglo (varitas[0]) y usa un for para comparar y actualizar 'max'."
    },
    {
        title: "Reto 8: Inventario de Pociones 🧪",
        body: "Los arreglos estáticos son del pasado. Los magos modernos usan **Listas (ArrayList)**.\n\n**Misión:**\nVe a `reto8/InventarioPociones.java` y filtra la lista para retornar solo los ingredientes que comiencen con la letra 'A'.",
        testFile: "com.colegiomagico.reto8.InventarioPocionesTest.txt",
        hint: "Crea una nueva ArrayList vacía. Recorre la lista original con un for, verifica con 'ingrediente.startsWith(\"A\")' y añade a la nueva lista."
    },
    {
        title: "Reto 9: Invocación de Familiar 🦉",
        body: "¡Ya casi te gradúas! Es hora de simular la Programación Orientada a Objetos combinando propiedades.\n\n**Misión:**\nVe a `reto9/InvocacionFamiliar.java` y retorna una cadena formateada con el tipo y nombre de tu familiar.",
        testFile: "com.colegiomagico.reto9.InvocacionFamiliarTest.txt",
        hint: "Usa 'familiar.getTipo()' y 'familiar.getNombre()' (o si son públicos, familiar.tipo). Formatea la cadena según lo pida la prueba."
    },
    {
        title: "Reto 10: Líneas Temporales 🌿 y El Pensadero 💭 (Pull Request Final)",
        body: "🎉 **¡FELICIDADES GRAN MAGO!** 🎉\n\nHas superado todos los retos de código. Para tu graduación oficial, falta el último paso: Crear una rama (línea temporal) y hacer un Pull Request.\n\n**Misión Final:**\n1. En tu terminal, crea una nueva rama y cámbiate a ella: `git checkout -b graduacion` (o `git branch graduacion` y luego `git checkout graduacion`).\n2. Haz una copia del archivo `PLANTILLA_ENTREGA.md`.\n3. Mueve esa copia a la carpeta `magos_graduados/` y renómbrala con tu nombre completo (ej: `magos_graduados/JUAN_PEREZ_GOMEZ.md`).\n4. Responde a las preguntas dentro del archivo.\n5. Sube tu archivo a esta nueva rama: `git add .`, `git commit -m \"feat: graduacion completada\"` y `git push origin graduacion`.\n6. Ve a tu repositorio en GitHub y abre un **Pull Request** hacia el repositorio original del colegio.\n\n¡Al hacer el Pull Request habrás terminado oficialmente tu entrenamiento! 🎓\n\n**--CALIFICACION_AQUI--**",
        testFile: null // No test required, it's the final issue.
    }
];

module.exports = async ({github, context}) => {
    const owner = context.repo.owner;
    const repo = context.repo.repo;

    console.log("Consultando el Tribunal Mágico...");

    // 1. Obtener todos los issues creados por el bot
    const { data: issues } = await github.rest.issues.listForRepo({
        owner,
        repo,
        state: 'open',
        creator: 'github-actions[bot]'
    });

    const openIssues = issues.filter(issue => issue.title.startsWith('Reto'));

    if (openIssues.length === 0) {
        const { data: closedIssues } = await github.rest.issues.listForRepo({ owner, repo, state: 'closed' });
        if (closedIssues.length === 0) {
            console.log("Es el inicio de la aventura. Creando el Reto 1.");
            await github.rest.issues.create({ owner, repo, title: RETOS[0].title, body: RETOS[0].body });
            return;
        } else {
            console.log("Ya se completaron todos los retos o no hay issues activos. Todo listo.");
            return;
        }
    }

    const currentIssue = openIssues[0];
    
    const match = currentIssue.title.match(/Reto (\d+)/);
    if (!match) return;
    
    const retoIndex = parseInt(match[1]) - 1;
    const reto = RETOS[retoIndex];

    console.log(`Evaluando el ${reto.title}...`);

    if (retoIndex === 9) {
        console.log("Esperando graduación manual.");
        return;
    }

    // Calcular cuántos fallos ha tenido en el issue actual para puntuación y pistas
    const { data: currentComments } = await github.rest.issues.listComments({
        owner, repo, issue_number: currentIssue.number
    });
    
    const failsInCurrentIssue = currentComments.filter(c => c.body.includes('❌ **El Tribunal ha detectado fallas')).length;

    // 2. Leer resultados de JUnit
    const testReportPath = path.join('target', 'surefire-reports', reto.testFile);
    let testPassed = false;
    
    if (fs.existsSync(testReportPath)) {
        const reportContent = fs.readFileSync(testReportPath, 'utf8');
        if (reportContent.includes('Failures: 0') && reportContent.includes('Errors: 0')) {
            testPassed = true;
        }
    }

    // 3. Tomar decisión
    if (testPassed) {
        console.log("¡Hechizo exitoso!");
        const puntosObtenidos = Math.max(2, 10 - (2 * failsInCurrentIssue));
        const notaReto = (puntosObtenidos / 10) * 5.0;
        
        await github.rest.issues.createComment({
            owner, repo,
            issue_number: currentIssue.number,
            body: `✅ **¡Hechizo superado!**\n\nEl Tribunal Mágico ha verificado tu código y funciona perfectamente.\n\n⭐ **Puntos obtenidos en este reto:** ${puntosObtenidos}/10 (Nota: ${notaReto.toFixed(1)})\n\nVoy a cerrar este reto y abriré el siguiente.`
        });
        
        await github.rest.issues.update({
            owner, repo,
            issue_number: currentIssue.number,
            state: 'closed'
        });
        
        const nextReto = RETOS[retoIndex + 1];
        if (nextReto) {
            let nextBody = nextReto.body;
            // Si es el último reto (10), calculamos la nota final
            if (retoIndex + 1 === 9) {
                console.log("Calculando nota final para la graduación...");
                let puntajeTotal = 10; // 10 puntos base por llegar al final
                const { data: allIssues } = await github.rest.issues.listForRepo({ owner, repo, state: 'all', creator: 'github-actions[bot]' });
                
                for (let i = 0; i < 9; i++) { // Para retos 1 a 9
                    const issueAnt = allIssues.find(iss => iss.title.startsWith(`Reto ${i+1}:`));
                    if (issueAnt) {
                        const { data: comms } = await github.rest.issues.listComments({ owner, repo, issue_number: issueAnt.number });
                        const fCount = comms.filter(c => c.body.includes('❌ **El Tribunal ha detectado fallas')).length;
                        puntajeTotal += Math.max(2, 10 - (2 * fCount));
                    } else {
                        puntajeTotal += 10; // Fallback por si no lo encuentra
                    }
                }
                
                const nota = (puntajeTotal / 100) * 5.0;
                const calificacionText = `### 🏆 Tu Calificación Final\n\n**Puntuación Total:** ${puntajeTotal}/100\n**Nota Final:** ${nota.toFixed(1)}`;
                nextBody = nextBody.replace("**--CALIFICACION_AQUI--**", calificacionText);
            }
            
            await github.rest.issues.create({ owner, repo, title: nextReto.title, body: nextBody });
        }
    } else {
        console.log("El hechizo falló o no compiló.");
        
        let pistaTexto = "";
        if (failsInCurrentIssue >= 1 && reto.hint) {
            pistaTexto = `\n\n💡 **Pista del Tribunal:** ${reto.hint}`;
        }

        await github.rest.issues.createComment({
            owner, repo,
            issue_number: currentIssue.number,
            body: `❌ **El Tribunal ha detectado fallas en tu hechizo.**\n\nAsegúrate de haber completado el código correctamente y de que pase las pruebas locales usando \`mvn test\` antes de volver a hacer push.${pistaTexto}\n\n¡No te rindas, sigue practicando! 🪄`
        });
    }
};
