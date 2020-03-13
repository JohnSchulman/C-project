#include "Bloc1.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

Bloc1::Bloc1 (bool fromScratch)
 {
  if (fromScratch)
        {
         couleur  = "rouge";
         x        = rand () % 10;
         y        = rand () % 10;
         rotation = (rand () % 4) * 90;

         cout << "Le bloc carre complet long a construire => couleur " << couleur << ", x=" << x << ", y=" << y << " et rot=" << rotation << endl;

         for (unsigned long i=0; i<100000000; i++);
        }
   else {
         cout << "Le bloc carre nu rapide a construire => ";
         couleur = "transparent";
         x        = 0;
         y        = 0;
         rotation = 0;
        }

 }

BlocAbstrait* Bloc1::cloner ()
 {
  Bloc1* b = new Bloc1 ();

  b->x        = x;
  b->y        = y;
  b->rotation = rotation;
  b->couleur  = couleur;

  return b;
 }

void Bloc1::afficher ()
 {
  cout << "Bloc carre " << couleur << " en " << x << "," << y << " avec rot=" << rotation << endl;
 }
