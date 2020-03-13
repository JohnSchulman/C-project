#ifndef BLOCABSTRAIT_H
#define BLOCABSTRAIT_H
#include <iostream>

using namespace std;

class BlocAbstrait
 {
  protected :

    int    x;
    int    y;
    string couleur;
    int    rotation;

  public:

   virtual BlocAbstrait* cloner   () = 0;
   virtual void          afficher () = 0;
 };

#endif // BLOCABSTRAIT_H
