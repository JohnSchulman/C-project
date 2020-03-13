#include "Bloc2.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

Bloc2::Bloc2 (bool fromScratch)
 {
  if (fromScratch)
        {
         couleur  = "jaune";
         x        = rand () % 10;
         y        = rand () % 10;
         rotation = (rand () % 4) * 90;

         cout << "Le bloc barre complet long a construire => couleur " << couleur << ", x=" << x << ", y=" << y << " et rot=" << rotation << endl;

         for (unsigned long i=0; i<100000000; i++);
        }
   else {
         cout << "Le bloc barre nu rapide a construire => ";
         couleur = "transparent";
         x        = 0;
         y        = 0;
         rotation = 0;
        }

 }

BlocAbstrait* Bloc2::cloner ()
 {
  Bloc2* b = new Bloc2 ();

  b->x        = x;
  b->y        = y;
  b->rotation = rotation;
  b->couleur  = couleur;

  return b;
 }

void Bloc2::afficher ()
 {
  cout << "Bloc barre " << couleur << " en " << x << "," << y << " avec rot=" << rotation << endl;
 }
