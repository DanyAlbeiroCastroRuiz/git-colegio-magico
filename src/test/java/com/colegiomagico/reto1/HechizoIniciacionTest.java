package com.colegiomagico.reto1;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class HechizoIniciacionTest {

    @Test
    public void testInvocar() {
        String resultado = HechizoIniciacion.invocar();
        assertNotNull(resultado, "El hechizo no debe devolver null");
        assertTrue(resultado.length() > 10, "El hechizo debe ser más largo, incluye los nombres.");
    }
}
