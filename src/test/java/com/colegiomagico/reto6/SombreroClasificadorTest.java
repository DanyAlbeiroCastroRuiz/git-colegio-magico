package com.colegiomagico.reto6;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SombreroClasificadorTest {

    @Test
    public void testClasificar() {
        assertEquals("Valentia", SombreroClasificador.clasificar("Gryffindor"));
        assertEquals("Inteligencia", SombreroClasificador.clasificar("Ravenclaw"));
        assertEquals("Desconocido", SombreroClasificador.clasificar("Muggle"));
    }
}
