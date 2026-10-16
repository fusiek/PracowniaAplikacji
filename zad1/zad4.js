import java.util.Scanner;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Random rand = new Random();

        // z1
        System.out.println("Zadanie 1");
        int[] t1 = {10, 20, 30, 40, 50, 60};
        int[] t2 = {11, 22, 33, 44, 55};
        
        System.out.print("tablica 1 co drugi: ");
        for (int i = 0; i < t1.length; i += 2) {
            System.out.print(t1[i] + " ");
        }
        System.out.print("\ntablica 2 co drugi: ");
        for (int i = 0; i < t2.length; i += 2) {
            System.out.print(t2[i] + " ");
        }
        System.out.println();

        // z2
        System.out.println("\nZadanie 2");
        int[] tMax = {4, -2, 15, 8, 23, 1};
        int max2 = tMax[0];
        for (int i = 1; i < tMax.length; i++) {
            if (tMax[i] > max2) {
                max2 = tMax[i];
            }
        }
        System.out.println("najwieksza liczba to " + max2);

        // z3
        System.out.println("\nZadanie 3");
        String[] slowa3 = {"java", "tablice", "petla", "kod"};
        for (String s : slowa3) {
            System.out.println(s.toUpperCase());
        }

        // z4
        System.out.println("\nZadanie 4");
        String[] slowa4 = new String[5];
        System.out.println("podaj 5 slow");
        for (int i = 0; i < 5; i++) {
            slowa4[i] = scan.next();
        }
        System.out.print("wynik: ");
        for (int i = 4; i >= 0; i--) {
            String odTylu = "";
            for (int j = slowa4[i].length() - 1; j >= 0; j--) {
                odTylu += slowa4[i].charAt(j);
            }
            System.out.print(odTylu + " ");
        }
        System.out.println();

        // z5
        System.out.println("\nZadanie 5");
        int[] t5 = new int[8];
        System.out.println("podaj 8 liczb");
        for (int i = 0; i < 8; i++) {
            t5[i] = scan.nextInt();
        }
       
        for (int i = 0; i < t5.length - 1; i++) {
            for (int j = 0; j < t5.length - 1 - i; j++) {
                if (t5[j] > t5[j + 1]) {
                    int temp = t5[j];
                    t5[j] = t5[j + 1];
                    t5[j + 1] = temp;
                }
            }
        }
        System.out.print("posortowane: ");
        for (int n : t5) {
            System.out.print(n + " ");
        }
        System.out.println();

        // z6
        System.out.println("\nZadanie 6");
        int[] t6 = new int[5];
        System.out.println("podaj 5 liczb do silni");
        for (int i = 0; i < 5; i++) {
            t6[i] = scan.nextInt();
        }
        for (int n : t6) {
            long silnia = 1;
            for (int i = 1; i <= n; i++) {
                silnia *= i;
            }
            System.out.println("silnia z " + n + " wynosi " + silnia);
        }

        // z7
        System.out.println("\nZadanie 7");
        String[] arr1 = {"abc", "def", "ghi"};
        String[] arr2 = {"abc", "def", "ghi"};
        boolean saTakieSame = true;
        
        if (arr1.length != arr2.length) {
            saTakieSame = false;
        } else {
            for (int i = 0; i < arr1.length; i++) {
                if (!arr1[i].equals(arr2[i])) {
                    saTakieSame = false;
                    break;
                }
            }
        }
        System.out.println("czy tablice sa takie same " + saTakieSame);

        // z8
        System.out.println("\nZadanie 8");
        int[] t8 = new int[10];
        System.out.print("tablica: ");
        int suma8 = 0;
        for (int i = 0; i < 10; i++) {
            t8[i] = rand.nextInt(21) - 10; 
            System.out.print(t8[i] + " ");
            suma8 += t8[i];
        }
        System.out.println();

        int min8 = t8[0];
        int max8 = t8[0];
        for (int i = 1; i < 10; i++) {
            if (t8[i] < min8) min8 = t8[i];
            if (t8[i] > max8) max8 = t8[i];
        }
        double srednia8 = (double) suma8 / 10;
        
        int mniejszych = 0;
        int wiekszych = 0;
        for (int n : t8) {
            if (n < srednia8) mniejszych++;
            if (n > srednia8) wiekszych++;
        }

        System.out.println("min " + min8);
        System.out.println("max " + max8);
        System.out.println("srednia " + srednia8);
        System.out.println("mniejszych od sredniej " + mniejszych);
        System.out.println("wiekszych od sredniej " + wiekszych);
        
        System.out.print("od tylu: ");
        for (int i = 9; i >= 0; i--) {
            System.out.print(t8[i] + " ");
        }
        System.out.println();

        // z9
        System.out.println("\nZadanie 9");
        int[] t9 = new int[20];
        int[] liczniki = new int[11];
        
        System.out.print("wylosowane liczby: ");
        for (int i = 0; i < 20; i++) {
            t9[i] = rand.nextInt(10) + 1; 
            System.out.print(t9[i] + " ");
            liczniki[t9[i]]++;
        }
        System.out.println();
        
        for (int i = 1; i <= 10; i++) {
            System.out.println("liczba " + i + " powtarza sie " + liczniki[i] + " razy");
        }

        scan.close();
    }
}
