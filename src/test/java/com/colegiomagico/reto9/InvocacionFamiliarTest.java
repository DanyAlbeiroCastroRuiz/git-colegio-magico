package com.colegiomagico.reto9;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class InvocacionFamiliarTest {

    @Test
    public void testInvocar() {
        assertEquals("Familiar: Lechuza llamado Hedwig", InvocacionFamiliar.invocar("Hedwig", "Lechuza"));
    }
}
