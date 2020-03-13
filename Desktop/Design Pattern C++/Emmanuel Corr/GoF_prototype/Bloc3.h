#ifndef BLOC3_H
#define BLOC3_H

#include "BlocAbstrait.h"

class Bloc3 : public BlocAbstrait
 {
  public:

   Bloc3 (bool fromScratch = false);

   virtual BlocAbstrait* cloner   ();
   virtual void          afficher ();
 };

#endif // BLOC3_H
