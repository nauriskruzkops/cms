<?php

namespace Admin\Entity\Traits;

trait Traceability {
    use TraceabilityCreated;
    use TraceabilityUpdated;
    use TraceabilityDeleted;
}