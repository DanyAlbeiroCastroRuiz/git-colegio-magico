const fs = require('fs');
const path = require('path');

const RETOS = [
    {
        title: "Reto 1: El Hechizo de Iniciación 🧙‍♂️",
        body: "¡Bienvenido al Colegio Mágico!\n\nTu primera misión es muy sencilla. Antes de poder hacer magia, el Tribunal necesita saber quién eres.\n\n**Misión:**\n1. Ve a `src/main/java/com/colegiomagico/reto1/HechizoIniciacion.java`.\n2. Completa el método `invocar()` para que retorne una cadena con tu nombre y el de tu profesor.\n3. Haz `git add`, `git commit` (usando `feat: ...`) y `git push`.\n\n¡Estaremos evaluando tu magia automáticamente! ✨",
        testFile: "com.colegiomagico.reto1.HechizoIniciacionTest.txt"
    },
    {
        title: "Reto 2: Aritmancia Básica ➕",
        body: "¡Excelente! Has superado el primer reto.\n\nLa magia requiere precisión. Ahora debes demostrar tus habilidades en Aritmancia (Matemáticas Mágicas).\n\n**Misión:**\n1. Ve a `src/main/java/com/colegiomagico/reto2/Aritmancia.java`.\n2. Completa el método `sumar(int a, int b)` para que devuelva el resultado correcto.\n3. Haz commit y push.\n\n¡Tú puedes!",
        testFile: "com.colegiomagico.reto2.AritmanciaTest.txt"
    },
    {
        title: "Reto 3: La Poción de Ciclos 🔄",
        body: "¡Increíble! Ahora entramos en terreno avanzado. Es hora de usar **Ciclos For** para preparar pociones en masa.\n\n**Misión:**\n1. Ve a `reto3/PocionCiclos.java`.\n2. Usa un ciclo `for` para crear una cadena que repita la palabra 'Pocion ' tantas veces como se indique.\n\n⚠️ **RECUERDA LAS REGLAS DE ORO:**\n- **No modifiques las pruebas (`Test.java`)**.\n- Puedes usar IA (ChatGPT, Gemini) para **resolver la lógica** en Java, pero NUNCA para los comandos de Git. ¡Usa tu memoria y la Varita Git!",
        testFile: "com.colegiomagico.reto3.PocionCiclosTest.txt"
    },
    {
        title: "Reto 4: Defensa contra las Artes Oscuras 🛡️",
        body: "¡Pociones listas! Pero ten cuidado, las maldiciones acechan. Necesitamos condicionales (`if/else`) para defendernos.\n\n**Misión:**\nVe a `reto4/DefensaCondicional.java` y bloquea las maldiciones imperdonables ('Crucio', 'Imperius'). Retorna 'Maldicion' si te atacan con ellas, o 'Permitido' de lo contrario.",
        testFile: "com.colegiomagico.reto4.DefensaCondicionalTest.txt"
    },
    {
        title: "Reto 5: Conteo Mágico con While ⏳",
        body: "¡Buena defensa! A veces no sabemos cuántas veces tenemos que repetir un hechizo. Para eso usamos el ciclo `while`.\n\n**Misión:**\nVe a `reto5/ConteoMagico.java` y usa un ciclo `while` para sumar todos los números desde 1 hasta el límite dado.",
        testFile: "com.colegiomagico.reto5.ConteoMagicoTest.txt"
    },
    {
        title: "Reto 6: El Sombrero Clasificador 🎩",
        body: "¡Has llegado a la mitad de tu formación! Es hora de usar la estructura `switch` (o múltiples `if/else if`) para clasificar a los estudiantes.\n\n**Misión:**\nVe a `reto6/SombreroClasificador.java` y asigna la virtud correspondiente a cada casa (Gryffindor -> Valentia, etc).",
        testFile: "com.colegiomagico.reto6.SombreroClasificadorTest.txt"
    },
    {
        title: "Reto 7: El Cofre de Varitas 🪄",
        body: "Un mago necesita organizar sus herramientas. Aprenderemos a iterar sobre **Arreglos (Arrays)**.\n\n**Misión:**\nVe a `reto7/CofreVaritas.java` y encuentra la varita más poderosa (el número mayor en el arreglo).",
        testFile: "com.colegiomagico.reto7.CofreVaritasTest.txt"
    },
    {
        title: "Reto 8: Inventario de Pociones 🧪",
        body: "Los arreglos estáticos son del pasado. Los magos modernos usan **Listas (ArrayList)**.\n\n**Misión:**\nVe a `reto8/InventarioPociones.java` y filtra la lista para retornar solo los ingredientes que comiencen con la letra 'A'.",
        testFile: "com.colegiomagico.reto8.InventarioPocionesTest.txt"
    },
    {
        title: "Reto 9: Invocación de Familiar 🦉",
        body: "¡Ya casi te gradúas! Es hora de simular la Programación Orientada a Objetos combinando propiedades.\n\n**Misión:**\nVe a `reto9/InvocacionFamiliar.java` y retorna una cadena formateada con el tipo y nombre de tu familiar.",
        testFile: "com.colegiomagico.reto9.InvocacionFamiliarTest.txt"
    },
    {
        title: "Reto 10: El Pensadero 💭 (Graduación)",
        body: "🎉 **¡FELICIDADES GRAN MAGO!** 🎉\n\nHas superado todos los retos de código. Para tu graduación oficial, falta el último paso: El Pull Request.\n\n**Misión Final:**\n1. En la raíz de tu proyecto, haz una copia del archivo `PLANTILLA_ENTREGA.md`.\n2. Mueve esa copia a la carpeta `magos_graduados/` y renómbrala con tu nombre completo (ej: `magos_graduados/JUAN_PEREZ_GOMEZ.md`).\n3. Responde a las preguntas dentro del archivo.\n4. Sube tu archivo con `git add`, `git commit` y `git push`.\n5. Ve a tu repositorio en GitHub y abre un **Pull Request** hacia el repositorio original del colegio.\n\n¡Al hacer el Pull Request habrás terminado oficialmente tu entrenamiento en el Colegio Mágico! 🎓",
        testFile: null // No test required, it's the final issue.
    }
];

module.exports = async ({github, context}) => {
    const owner = context.repo.owner;
    const repo = context.repo.repo;

    console.log("Consultando el Tribunal Mágico...");

    // 1. Obtener todos los issues abiertos creados por el bot
    const { data: issues } = await github.rest.issues.listForRepo({
        owner,
        repo,
        state: 'open',
        creator: 'github-actions[bot]' // Asegurarnos de que solo evaluamos issues nuestros
    });

    // Validar si el usuario lo creo a mano o el bot tiene otro nombre,
    // mejor buscamos issues que empiecen por "Reto"
    const openIssues = issues.filter(issue => issue.title.startsWith('Reto'));

    if (openIssues.length === 0) {
        // No hay issues abiertos. ¿Es el inicio? Verifiquemos si hay issues cerrados.
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

    // Tomamos el issue actual (asumimos que solo hay 1 abierto a la vez)
    const currentIssue = openIssues[0];
    
    // Determinamos en qué reto estamos parseando el título (ej: "Reto 3: ...")
    const match = currentIssue.title.match(/Reto (\d+)/);
    if (!match) return;
    
    const retoIndex = parseInt(match[1]) - 1;
    const reto = RETOS[retoIndex];

    console.log(`Evaluando el ${reto.title}...`);

    // Si es el reto 10, no hacemos nada automáticamente aquí, se evalúa manual.
    if (retoIndex === 9) {
        console.log("Esperando graduación manual.");
        return;
    }

    // 2. Leer resultados de JUnit
    const testReportPath = path.join('target', 'surefire-reports', reto.testFile);
    
    let testPassed = false;
    
    if (fs.existsSync(testReportPath)) {
        const reportContent = fs.readFileSync(testReportPath, 'utf8');
        // El reporte de Maven Surefire dice algo como: "Tests run: 1, Failures: 0, Errors: 0, Skipped: 0"
        if (reportContent.includes('Failures: 0') && reportContent.includes('Errors: 0')) {
            testPassed = true;
        }
    }

    // 3. Tomar decisión
    if (testPassed) {
        console.log("¡Hechizo exitoso!");
        // Comentar felicitando
        await github.rest.issues.createComment({
            owner, repo,
            issue_number: currentIssue.number,
            body: `✅ **¡Hechizo superado!**\n\nEl Tribunal Mágico ha verificado tu código y funciona perfectamente. Voy a cerrar este reto y abriré el siguiente.`
        });
        
        // Cerrar issue actual
        await github.rest.issues.update({
            owner, repo,
            issue_number: currentIssue.number,
            state: 'closed'
        });
        
        // Crear siguiente issue
        const nextReto = RETOS[retoIndex + 1];
        if (nextReto) {
            await github.rest.issues.create({ owner, repo, title: nextReto.title, body: nextReto.body });
        }
    } else {
        console.log("El hechizo falló o no compiló.");
        // Comentar dando ánimos
        await github.rest.issues.createComment({
            owner, repo,
            issue_number: currentIssue.number,
            body: `❌ **El Tribunal ha detectado fallas en tu hechizo.**\n\nAsegúrate de haber completado el código correctamente y de que pase las pruebas locales usando \`mvn test\` antes de volver a hacer push.\n\n¡No te rindas, sigue practicando! 🪄`
        });
    }
};
