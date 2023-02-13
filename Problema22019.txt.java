/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Tema6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;

/**
 *
 * @author msi-d
 */
public class Problema22019 {
    
    public static void main(String [] args){
        ArrayList <Alumno> lista = new ArrayList<>();
        
        Alumno a1 = new Alumno("Maria", 6.7, 129741);
        Alumno a2 = new Alumno("Pepe", 9.3, 13476812);
        Alumno a3 = new Alumno("Juan", 9.3, 2121312);

        
        lista.add(a1);
        lista.add(a2);
       

        //Mostramos la lista sin ordenar
        for(int i=0; i<lista.size(); i++){
            System.out.println(lista.get(i).getNombre() +", "+lista.get(i).getNota());
        }
        
        System.out.println("\nUtilizando bucle for-each es lo mismo\n");
        for (Alumno l : lista) {
            System.out.println(l.getNombre() + ", " + l.getNota());
        }
        
        //System.out.println("\nUtilizando iteradores = \n");

        //Iterator it1 = lista.iterator();
        // while(it1.hasNext()){
        //    System.out.println(it1.next());
        // }
        
        System.out.println("\nOrdenando Array\n");

        /*Collections.sort(lista, (Alumno alumno1, Alumno alumno2) -> 
                new Double(alumno2.getNota()).compareTo(alumno1.getNota()));
        
        for (Alumno l : lista) {
            System.out.println(l.getNombre() + ", " + l.getNota());
        }
        */
        
        AlumnoExt al3 = new AlumnoExt("Pepe", 9.3, 13476812, "Quantico");
        System.out.println(al3.getNombreC());
        
        ArrayList <AlumnoExt> lista2 = new ArrayList<>();
        lista2.add(al3);
        
        HashMap<Integer,Alumno> map = new HashMap<>();
        map.put(13476812, a2);
        map.put(a1.getNumExpediente(), a1);
        
        System.out.println("Expe: "+map.keySet()+"\nAlumno: "+ map.values());
        
        for(int i=0; i<map.size(); i++){
            if(map.containsKey(lista.get(i).getNumExpediente())){
                System.out.println(lista.get(i).getNombre());
            }
        }

        
        
        
        
    }

    public static class Alumno{
        private String nombre;
        private double nota;
        private int numExp;
        
        public Alumno(String n, double no, int e){
            this.nombre=n;
            this.nota=no;
            this.numExp=e;
        }
        
        public int getNumExpediente(){
            return numExp;
        }
        
        public String getNombre(){
            return nombre;
        }
        
        public void setNombre(String n){
            this.nombre=n;
        }
        
        public double getNota(){
            return nota;
        }
        
        public void setNota(double n){
            this.nota = n;
        }
    }
    
    public static class AlumnoExt extends Alumno{

        String colegio;
        
        public AlumnoExt(String n, double no, int e, String colegio) {
            super(n, no, e);
            this.colegio= colegio;
        }
        
        public void setNombreC(String n){
            this.colegio=n;
        }
        
         public String getNombreC(){
            return colegio;
        }
        
        
    }
    
}
