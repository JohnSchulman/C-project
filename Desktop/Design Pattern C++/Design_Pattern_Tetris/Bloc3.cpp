#include "Bloc3.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

Bloc3::Bloc3 (bool fromScratch)
 {
  if (fromScratch)
        {
         couleur  = "bleu";
         x        = rand () % 10;
         y        = rand () % 10;
         rotation = (rand () % 4) * 90;

         cout << "Le bloc S1    complet long a construire => couleur " << couleur << ", x=" << x << ", y=" << y << " et rot=" << rotation << endl;

         for (unsigned long i=0; i<100000000; i++);
        }
   else {
         cout << "Le bloc S1    nu rapide a construire => ";
         couleur = "transparent";
         x        = 0;
         y        = 0;
         rotation = 0;
        }

 }

BlocAbstrait* Bloc3::cloner ()
 {
  Bloc3* b = new Bloc3 ();

  b->x        = x;
  b->y        = y;
  b->rotation = rotation;
  b->couleur  = couleur;

  return b;
 }

void Bloc3::afficher ()
 {
  cout << "Bloc S1    " << couleur << " en " << x << "," << y << " avec rot=" << rotation << endl;
 }
