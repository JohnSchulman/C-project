#ifndef BLOC7_H
#define BLOC7_H

#include "BlocAbstrait.h"

class Bloc7 : public BlocAbstrait
 {
  public:

   Bloc7 (bool fromScratch = false);

   virtual BlocAbstrait* cloner   ();
   virtual void          afficher ();
 };

#endif // BLOC7_H
