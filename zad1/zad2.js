import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // z1
        System.out.println("Zadanie 1");
        System.out.print("podaj liczbe ");
        int l1 = scan.nextInt();
        if (l1 % 3 == 0) {
            System.out.println("jest podzielna przez 3");
        } else {
            System.out.println("nie jest podzielna przez 3");
        }

        // z2
        System.out.println("\nZadanie 2");
        System.out.print("podaj 3 boki ");
        double a = scan.nextDouble();
        double b = scan.nextDouble();
        double c = scan.nextDouble();
        if (a + b > c && a + c > b && b + c > a) {
            System.out.println("mozna zbudowac trojkat");
        } else {
            System.out.println("nie mozna zbudowac trojkata");
        }

        // z3
        System.out.println("\nZadanie 3");
        System.out.print("podaj dwie liczby ");
        int n1 = scan.nextInt();
        int n2 = scan.nextInt();
        if (n1 > n2) {
            System.out.println("najwieksza to " + n1);
        } else {
            System.out.println("najwieksza to " + n2);
        }

        // z4
        System.out.println("\nZadanie 4");
        System.out.print("podaj trzy liczby ");
        int t1 = scan.nextInt();
        int t2 = scan.nextInt();
        int t3 = scan.nextInt();
        int max = t1;
        if (t2 > max) max = t2;
        if (t3 > max) max = t3;
        System.out.println("najwieksza to " + max);

        // z5
        System.out.println("\nZadanie 5");
        System.out.print("podaj numer miesiaca ");
        int m = scan.nextInt();
        switch (m) {
            case 1 -> System.out.println("styczen");
            case 2 -> System.out.println("luty");
            case 3 -> System.out.println("marzec");
            case 4 -> System.out.println("kwiecien");
            case 5 -> System.out.println("maj");
            case 6 -> System.out.println("czerwiec");
            case 7 -> System.out.println("lipiec");
            case 8 -> System.out.println("sierpien");
            case 9 -> System.out.println("wrzesien");
            case 10 -> System.out.println("pazdziernik");
            case 11 -> System.out.println("listopad");
            case 12 -> System.out.println("grudzien");
            default -> System.out.println("Nieprawidlowy numer miesiaca");
        }

        // z6
        System.out.println("\nZadanie 6");
        scan.nextLine(); 
        String mojeImie = "jan"; 
        System.out.print("podaj swoje imie ");
        String podaneImie = scan.nextLine();
        if (podaneImie.equalsIgnoreCase(mojeImie)) {
            System.out.println("mamy tak samo na imie");
        } else {
            System.out.println("mamy rozne imiona");
        }

        // z7
        System.out.println("\nZadanie 7");
        System.out.print("podaj wiek ");
        int wiek = scan.nextInt();
        boolean pelnoletni = (wiek >= 18) ? true : false;
        System.out.println("pelnoletnosc " + pelnoletni);

        // z8
        System.out.println("\nZadanie 8");
        System.out.print("podaj rok ");
        int rok = scan.nextInt();
        if ((rok % 4 == 0 && rok % 100 != 0) || (rok % 400 == 0)) {
            System.out.println("rok przestepny");
        } else {
            System.out.println("rok nieprzestepny");
        }

        // z9
        System.out.println("\nZadanie 9");
        System.out.print("podaj wage w kg i wzrost w metrach ");
        double waga = scan.nextDouble();
        double wzrost = scan.nextDouble();
        double bmi = waga / (wzrost * wzrost);
        if (bmi < 18.5) {
            System.out.println("niedowaga");
        } else if (bmi <= 24.9) {
            System.out.println("waga prawidlowa");
        } else {
            System.out.println("nadwaga");
        }

        // z10
        System.out.println("\nZadanie 10");
        double cena = 0;
        int raty = 0;
        
        while (true) {
            System.out.print("podaj cene 100 do 10000 ");
            cena = scan.nextDouble();
            System.out.print("podaj liczbe rat 6 do 48 ");
            raty = scan.nextInt();
            
            if (cena >= 100 && cena <= 10000 && raty >= 6 && raty <= 48) {
                break;
            }
            System.out.println("bledne dane podaj jeszcze raz");
        }

        double oprocentowanie = 0;
        if (raty <= 12) {
            oprocentowanie = 0.025;
        } else if (raty <= 24) {
            oprocentowanie = 0.05;
        } else {
            oprocentowanie = 0.10;
        }

        double doSplaty = cena + (cena * oprocentowanie);
        double rata = doSplaty / raty;
        System.out.println("miesieczna rata wynosi " + rata);

        // z11
        System.out.println("\nZadanie 11");
        System.out.println("prosty kalkulator");
        System.out.print("podaj pierwsza liczbe ");
        double kalk1 = scan.nextDouble();
        System.out.print("podaj znak dzialania ");
        char znak = scan.next().charAt(0);
        System.out.print("podaj druga liczbe ");
        double kalk2 = scan.nextDouble();

        switch (znak) {
            case '+' -> System.out.println("wynik " + (kalk1 + kalk2));
            case '-' -> System.out.println("wynik " + (kalk1 - kalk2));
            case '*' -> System.out.println("wynik " + (kalk1 * kalk2));
            case '/' -> {
                if (kalk2 == 0) {
                    System.out.println("blad nie dziel przez zero");
                } else {
                    System.out.println("wynik " + (kalk1 / kalk2));
                }
            }
            default -> System.out.println("bledny symbol dzialania");
        }

        scan.close();
    }
}
