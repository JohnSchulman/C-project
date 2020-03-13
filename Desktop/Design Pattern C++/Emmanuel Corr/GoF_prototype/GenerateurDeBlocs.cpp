#include "GenerateurDeBlocs.h"

#include <cstdlib>
#include <ctime>

using namespace std;

#include "Bloc1.h"
#include "Bloc2.h"
#include "Bloc3.h"
#include "Bloc4.h"
#include "Bloc5.h"
#include "Bloc6.h"
#include "Bloc7.h"

GenerateurDeBlocs::GenerateurDeBlocs()
 {
  srand (time(NULL));

  tab[0] = new Bloc1 (true);
  tab[1] = new Bloc2 (true);
  tab[2] = new Bloc3 (true);
  tab[3] = new Bloc4 (true);
  tab[4] = new Bloc5 (true);
  tab[5] = new Bloc6 (true);
  tab[6] = new Bloc7 (true);
 }

void GenerateurDeBlocs::generer ()
 {
  for (int i=0; i<20; i++)
   {
    tab [rand()%7] ->cloner()->afficher();
   }
  }

