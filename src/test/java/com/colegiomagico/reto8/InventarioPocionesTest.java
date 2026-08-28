package com.colegiomagico.reto8;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class InventarioPocionesTest {

    @Test
    public void testFiltrar() {
        java.util.List<String> ingredientes = java.util.Arrays.asList("Ajenjo", "Mandragora", "Aconito");
        java.util.List<String> filtrados = InventarioPociones.filtrar(ingredientes);
        assertEquals(2, filtrados.size());
        assertTrue(filtrados.contains("Ajenjo"));
    }
}
