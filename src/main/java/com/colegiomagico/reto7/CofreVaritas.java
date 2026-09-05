package com.colegiomagico.reto7;

/**
 * Retorna el número mayor dentro del arreglo de tamaños.
 */
public class CofreVaritas {

    public static int varitaMasPoderosa(int[] tamanos) {
        int numM=tamanos[0];
        for(int i=0;i<tamanos.length;i++){
            if(tamanos[i] != numM && tamanos[i]>numM){
                numM=tamanos[i];
            }
        }
        return numM;
    }

    public static void main(String[] args) {
        int[] varitas = {10, 15, 8};
        System.out.println("Poderosa: " + varitaMasPoderosa(varitas));
    }
}
