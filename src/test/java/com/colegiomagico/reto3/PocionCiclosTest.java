package com.colegiomagico.reto3;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PocionCiclosTest {

    @Test
    public void testPreparar() {
        assertEquals("Pocion Pocion Pocion ", PocionCiclos.preparar(3));
        assertEquals("", PocionCiclos.preparar(0));
    }
}
